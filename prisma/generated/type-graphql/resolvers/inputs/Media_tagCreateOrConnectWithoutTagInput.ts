import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCreateWithoutTagInput } from "../inputs/Media_tagCreateWithoutTagInput";
import { Media_tagWhereUniqueInput } from "../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.InputType("Media_tagCreateOrConnectWithoutTagInput", {})
export class Media_tagCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => Media_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Media_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Media_tagCreateWithoutTagInput;
}
