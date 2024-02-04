import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationOrderByRelevanceFieldEnum } from "../../enums/Customer_group_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_group_translationOrderByRelevanceInput", {})
export class Customer_group_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Customer_group_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "custom_fields" | "registration_title" | "registration_introduction" | "registration_seo_meta_description">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
