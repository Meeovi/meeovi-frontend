import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationUpdateInput } from "../../../inputs/Custom_field_set_relationUpdateInput";
import { Custom_field_set_relationWhereUniqueInput } from "../../../inputs/Custom_field_set_relationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustom_field_set_relationArgs {
  @TypeGraphQL.Field(_type => Custom_field_set_relationUpdateInput, {
    nullable: false
  })
  data!: Custom_field_set_relationUpdateInput;

  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_set_relationWhereUniqueInput;
}
