import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipient_tagOrderByWithAggregationInput } from "../../../inputs/Newsletter_recipient_tagOrderByWithAggregationInput";
import { Newsletter_recipient_tagScalarWhereWithAggregatesInput } from "../../../inputs/Newsletter_recipient_tagScalarWhereWithAggregatesInput";
import { Newsletter_recipient_tagWhereInput } from "../../../inputs/Newsletter_recipient_tagWhereInput";
import { Newsletter_recipient_tagScalarFieldEnum } from "../../../../enums/Newsletter_recipient_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNewsletter_recipient_tagArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipient_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Newsletter_recipient_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"newsletter_recipient_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Newsletter_recipient_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
