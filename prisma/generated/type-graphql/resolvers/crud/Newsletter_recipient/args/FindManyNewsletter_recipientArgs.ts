import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput";
import { Newsletter_recipientWhereInput } from "../../../inputs/Newsletter_recipientWhereInput";
import { Newsletter_recipientWhereUniqueInput } from "../../../inputs/Newsletter_recipientWhereUniqueInput";
import { Newsletter_recipientScalarFieldEnum } from "../../../../enums/Newsletter_recipientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: true
  })
  cursor?: Newsletter_recipientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "title" | "first_name" | "last_name" | "zip_code" | "city" | "street" | "status" | "hash" | "salutation_id" | "language_id" | "sales_channel_id" | "custom_fields" | "confirmed_at" | "created_at" | "updated_at"> | undefined;
}
