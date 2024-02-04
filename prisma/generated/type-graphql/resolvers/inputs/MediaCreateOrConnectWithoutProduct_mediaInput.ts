import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_mediaInput } from "../inputs/MediaCreateWithoutProduct_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutProduct_mediaInput", {})
export class MediaCreateOrConnectWithoutProduct_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_mediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_mediaInput;
}
