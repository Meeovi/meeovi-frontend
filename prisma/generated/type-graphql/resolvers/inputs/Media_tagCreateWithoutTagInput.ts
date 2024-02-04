import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutMedia_tagInput } from "../inputs/MediaCreateNestedOneWithoutMedia_tagInput";

@TypeGraphQL.InputType("Media_tagCreateWithoutTagInput", {})
export class Media_tagCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutMedia_tagInput, {
    nullable: false
  })
  media!: MediaCreateNestedOneWithoutMedia_tagInput;
}
