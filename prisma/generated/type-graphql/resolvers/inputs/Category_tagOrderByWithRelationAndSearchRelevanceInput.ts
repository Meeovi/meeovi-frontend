import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CategoryOrderByWithRelationAndSearchRelevanceInput";
import { TagOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TagOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Category_tagOrderByWithRelationAndSearchRelevanceInput", {})
export class Category_tagOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  category?: CategoryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationAndSearchRelevanceInput | undefined;
}
