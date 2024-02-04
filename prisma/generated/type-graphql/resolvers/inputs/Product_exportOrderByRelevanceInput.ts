import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportOrderByRelevanceFieldEnum } from "../../enums/Product_exportOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_exportOrderByRelevanceInput", {})
export class Product_exportOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_exportOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"file_name" | "access_key" | "encoding" | "file_format" | "header_template" | "body_template" | "footer_template">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
