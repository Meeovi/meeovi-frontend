import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagUpdateWithoutMediaInput } from "../inputs/Media_tagUpdateWithoutMediaInput";
import { Media_tagWhereUniqueInput } from "../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.InputType("Media_tagUpdateWithWhereUniqueWithoutMediaInput", {})
export class Media_tagUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Media_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_tagUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Media_tagUpdateWithoutMediaInput;
}
