import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaOrderByWithAggregationInput } from "../../../inputs/Mail_template_mediaOrderByWithAggregationInput";
import { Mail_template_mediaScalarWhereWithAggregatesInput } from "../../../inputs/Mail_template_mediaScalarWhereWithAggregatesInput";
import { Mail_template_mediaWhereInput } from "../../../inputs/Mail_template_mediaWhereInput";
import { Mail_template_mediaScalarFieldEnum } from "../../../../enums/Mail_template_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereInput, {
    nullable: true
  })
  where?: Mail_template_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Mail_template_mediaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "mail_template_id" | "language_id" | "media_id" | "position">;

  @TypeGraphQL.Field(_type => Mail_template_mediaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Mail_template_mediaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
