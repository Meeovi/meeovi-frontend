import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateWithoutMediaInput } from "../inputs/Media_folderCreateWithoutMediaInput";
import { Media_folderUpdateWithoutMediaInput } from "../inputs/Media_folderUpdateWithoutMediaInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderUpsertWithoutMediaInput", {})
export class Media_folderUpsertWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_folderUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Media_folderUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Media_folderCreateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;
}
