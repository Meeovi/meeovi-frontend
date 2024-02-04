import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_setWhereUniqueInput } from "../../../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCustom_field_setArgs {
  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_setWhereUniqueInput;
}
