import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldUpdateInput } from "../../../inputs/Custom_fieldUpdateInput";
import { Custom_fieldWhereUniqueInput } from "../../../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustom_fieldArgs {
  @TypeGraphQL.Field(_type => Custom_fieldUpdateInput, {
    nullable: false
  })
  data!: Custom_fieldUpdateInput;

  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_fieldWhereUniqueInput;
}
