import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput";
import { TagOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TagOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Newsletter_recipient_tagOrderByWithRelationAndSearchRelevanceInput", {})
export class Newsletter_recipient_tagOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  newsletter_recipient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  newsletter_recipient?: Newsletter_recipientOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationAndSearchRelevanceInput | undefined;
}
