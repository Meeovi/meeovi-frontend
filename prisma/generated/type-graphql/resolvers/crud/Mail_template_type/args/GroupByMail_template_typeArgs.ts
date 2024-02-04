import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_typeOrderByWithAggregationInput } from "../../../inputs/Mail_template_typeOrderByWithAggregationInput";
import { Mail_template_typeScalarWhereWithAggregatesInput } from "../../../inputs/Mail_template_typeScalarWhereWithAggregatesInput";
import { Mail_template_typeWhereInput } from "../../../inputs/Mail_template_typeWhereInput";
import { Mail_template_typeScalarFieldEnum } from "../../../../enums/Mail_template_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMail_template_typeArgs {
  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  where?: Mail_template_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Mail_template_typeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "technical_name" | "available_entities" | "created_at" | "updated_at" | "template_data">;

  @TypeGraphQL.Field(_type => Mail_template_typeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Mail_template_typeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
