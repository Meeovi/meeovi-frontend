import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutMedia_tagInput } from "../inputs/TagCreateNestedOneWithoutMedia_tagInput";

@TypeGraphQL.InputType("Media_tagCreateWithoutMediaInput", {})
export class Media_tagCreateWithoutMediaInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutMedia_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutMedia_tagInput;
}
