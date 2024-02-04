import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagUpdateWithoutTagInput } from "../inputs/Media_tagUpdateWithoutTagInput";
import { Media_tagWhereUniqueInput } from "../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.InputType("Media_tagUpdateWithWhereUniqueWithoutTagInput", {})
export class Media_tagUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Media_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Media_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_tagUpdateWithoutTagInput, {
    nullable: false
  })
  data!: Media_tagUpdateWithoutTagInput;
}
