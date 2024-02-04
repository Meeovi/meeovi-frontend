import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaOrderByRelevanceFieldEnum } from "../../enums/MediaOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MediaOrderByRelevanceInput", {})
export class MediaOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MediaOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"mime_type" | "file_extension" | "meta_data" | "file_name" | "path">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
