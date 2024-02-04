import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldCreateInput } from "../../../inputs/Custom_fieldCreateInput";
import { Custom_fieldUpdateInput } from "../../../inputs/Custom_fieldUpdateInput";
import { Custom_fieldWhereUniqueInput } from "../../../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustom_fieldArgs {
  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_fieldWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_fieldCreateInput, {
    nullable: false
  })
  create!: Custom_fieldCreateInput;

  @TypeGraphQL.Field(_type => Custom_fieldUpdateInput, {
    nullable: false
  })
  update!: Custom_fieldUpdateInput;
}
