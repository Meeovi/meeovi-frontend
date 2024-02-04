import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailCreateWithoutMediaInput } from "../inputs/Media_thumbnailCreateWithoutMediaInput";
import { Media_thumbnailWhereUniqueInput } from "../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.InputType("Media_thumbnailCreateOrConnectWithoutMediaInput", {})
export class Media_thumbnailCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnailWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_thumbnailCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Media_thumbnailCreateWithoutMediaInput;
}
