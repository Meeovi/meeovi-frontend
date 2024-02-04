import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientOrderByWithAggregationInput } from "../../../inputs/Newsletter_recipientOrderByWithAggregationInput";
import { Newsletter_recipientScalarWhereWithAggregatesInput } from "../../../inputs/Newsletter_recipientScalarWhereWithAggregatesInput";
import { Newsletter_recipientWhereInput } from "../../../inputs/Newsletter_recipientWhereInput";
import { Newsletter_recipientScalarFieldEnum } from "../../../../enums/Newsletter_recipientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Newsletter_recipientOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "title" | "first_name" | "last_name" | "zip_code" | "city" | "street" | "status" | "hash" | "salutation_id" | "language_id" | "sales_channel_id" | "custom_fields" | "confirmed_at" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Newsletter_recipientScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Newsletter_recipientScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
