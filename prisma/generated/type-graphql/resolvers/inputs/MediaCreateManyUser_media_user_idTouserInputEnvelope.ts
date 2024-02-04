import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateManyUser_media_user_idTouserInput } from "../inputs/MediaCreateManyUser_media_user_idTouserInput";

@TypeGraphQL.InputType("MediaCreateManyUser_media_user_idTouserInputEnvelope", {})
export class MediaCreateManyUser_media_user_idTouserInputEnvelope {
  @TypeGraphQL.Field(_type => [MediaCreateManyUser_media_user_idTouserInput], {
    nullable: false
  })
  data!: MediaCreateManyUser_media_user_idTouserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
