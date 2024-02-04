import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutMedia_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutMedia_tagNestedInput";

@TypeGraphQL.InputType("Media_tagUpdateWithoutMediaInput", {})
export class Media_tagUpdateWithoutMediaInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutMedia_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutMedia_tagNestedInput | undefined;
}
