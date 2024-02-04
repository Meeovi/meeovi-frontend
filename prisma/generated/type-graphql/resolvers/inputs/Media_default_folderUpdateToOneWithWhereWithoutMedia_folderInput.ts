import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderUpdateWithoutMedia_folderInput } from "../inputs/Media_default_folderUpdateWithoutMedia_folderInput";
import { Media_default_folderWhereInput } from "../inputs/Media_default_folderWhereInput";

@TypeGraphQL.InputType("Media_default_folderUpdateToOneWithWhereWithoutMedia_folderInput", {})
export class Media_default_folderUpdateToOneWithWhereWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  where?: Media_default_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderUpdateWithoutMedia_folderInput, {
    nullable: false
  })
  data!: Media_default_folderUpdateWithoutMedia_folderInput;
}
