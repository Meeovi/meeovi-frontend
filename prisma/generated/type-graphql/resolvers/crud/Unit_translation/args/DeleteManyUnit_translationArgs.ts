import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationWhereInput } from "../../../inputs/Unit_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationWhereInput, {
    nullable: true
  })
  where?: Unit_translationWhereInput | undefined;
}
