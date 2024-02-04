import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateWithoutMediaInput } from "../inputs/Media_translationCreateWithoutMediaInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationCreateOrConnectWithoutMediaInput", {})
export class Media_translationCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_translationCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Media_translationCreateWithoutMediaInput;
}
