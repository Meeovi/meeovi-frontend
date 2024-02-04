import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailCreateManyMediaInput } from "../inputs/Media_thumbnailCreateManyMediaInput";

@TypeGraphQL.InputType("Media_thumbnailCreateManyMediaInputEnvelope", {})
export class Media_thumbnailCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_thumbnailCreateManyMediaInput], {
    nullable: false
  })
  data!: Media_thumbnailCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
