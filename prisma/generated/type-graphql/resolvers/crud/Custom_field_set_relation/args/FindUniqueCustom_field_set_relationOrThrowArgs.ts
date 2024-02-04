import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationWhereUniqueInput } from "../../../inputs/Custom_field_set_relationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustom_field_set_relationOrThrowArgs {
  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_set_relationWhereUniqueInput;
}
