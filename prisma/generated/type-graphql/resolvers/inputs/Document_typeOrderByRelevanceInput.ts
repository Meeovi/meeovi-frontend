import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeOrderByRelevanceFieldEnum } from "../../enums/Document_typeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Document_typeOrderByRelevanceInput", {})
export class Document_typeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Document_typeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "technical_name"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
