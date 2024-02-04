import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityWhereInput } from "../../../inputs/Custom_entityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustom_entityArgs {
  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  where?: Custom_entityWhereInput | undefined;
}
