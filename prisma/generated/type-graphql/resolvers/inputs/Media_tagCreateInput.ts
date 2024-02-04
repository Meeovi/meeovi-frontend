import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutMedia_tagInput } from "../inputs/MediaCreateNestedOneWithoutMedia_tagInput";
import { TagCreateNestedOneWithoutMedia_tagInput } from "../inputs/TagCreateNestedOneWithoutMedia_tagInput";

@TypeGraphQL.InputType("Media_tagCreateInput", {})
export class Media_tagCreateInput {
  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutMedia_tagInput, {
    nullable: false
  })
  media!: MediaCreateNestedOneWithoutMedia_tagInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutMedia_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutMedia_tagInput;
}
