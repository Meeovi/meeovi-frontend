import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutMedia_thumbnailInput } from "../inputs/MediaCreateWithoutMedia_thumbnailInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutMedia_thumbnailInput", {})
export class MediaCreateOrConnectWithoutMedia_thumbnailInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_thumbnailInput, {
    nullable: false
  })
  create!: MediaCreateWithoutMedia_thumbnailInput;
}
