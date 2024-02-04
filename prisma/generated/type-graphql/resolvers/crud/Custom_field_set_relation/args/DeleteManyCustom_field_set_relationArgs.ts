import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationWhereInput } from "../../../inputs/Custom_field_set_relationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustom_field_set_relationArgs {
  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereInput, {
    nullable: true
  })
  where?: Custom_field_set_relationWhereInput | undefined;
}
