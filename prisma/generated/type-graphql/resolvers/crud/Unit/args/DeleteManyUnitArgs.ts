import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitWhereInput } from "../../../inputs/UnitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUnitArgs {
  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  where?: UnitWhereInput | undefined;
}
