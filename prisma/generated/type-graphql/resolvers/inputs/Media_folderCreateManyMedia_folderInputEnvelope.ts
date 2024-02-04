import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateManyMedia_folderInput } from "../inputs/Media_folderCreateManyMedia_folderInput";

@TypeGraphQL.InputType("Media_folderCreateManyMedia_folderInputEnvelope", {})
export class Media_folderCreateManyMedia_folderInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_folderCreateManyMedia_folderInput], {
    nullable: false
  })
  data!: Media_folderCreateManyMedia_folderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
