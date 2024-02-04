import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateOneRequiredWithoutMedia_tagNestedInput } from "../inputs/MediaUpdateOneRequiredWithoutMedia_tagNestedInput";

@TypeGraphQL.InputType("Media_tagUpdateWithoutTagInput", {})
export class Media_tagUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => MediaUpdateOneRequiredWithoutMedia_tagNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneRequiredWithoutMedia_tagNestedInput | undefined;
}
