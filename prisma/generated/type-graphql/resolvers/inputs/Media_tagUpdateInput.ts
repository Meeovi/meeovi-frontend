import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateOneRequiredWithoutMedia_tagNestedInput } from "../inputs/MediaUpdateOneRequiredWithoutMedia_tagNestedInput";
import { TagUpdateOneRequiredWithoutMedia_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutMedia_tagNestedInput";

@TypeGraphQL.InputType("Media_tagUpdateInput", {})
export class Media_tagUpdateInput {
  @TypeGraphQL.Field(_type => MediaUpdateOneRequiredWithoutMedia_tagNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneRequiredWithoutMedia_tagNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutMedia_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutMedia_tagNestedInput | undefined;
}
