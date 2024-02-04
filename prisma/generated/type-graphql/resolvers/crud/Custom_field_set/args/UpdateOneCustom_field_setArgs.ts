import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_setUpdateInput } from "../../../inputs/Custom_field_setUpdateInput";
import { Custom_field_setWhereUniqueInput } from "../../../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustom_field_setArgs {
  @TypeGraphQL.Field(_type => Custom_field_setUpdateInput, {
    nullable: false
  })
  data!: Custom_field_setUpdateInput;

  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_setWhereUniqueInput;
}
