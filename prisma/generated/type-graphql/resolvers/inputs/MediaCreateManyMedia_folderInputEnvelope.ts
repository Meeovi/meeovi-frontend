import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateManyMedia_folderInput } from "../inputs/MediaCreateManyMedia_folderInput";

@TypeGraphQL.InputType("MediaCreateManyMedia_folderInputEnvelope", {})
export class MediaCreateManyMedia_folderInputEnvelope {
  @TypeGraphQL.Field(_type => [MediaCreateManyMedia_folderInput], {
    nullable: false
  })
  data!: MediaCreateManyMedia_folderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
