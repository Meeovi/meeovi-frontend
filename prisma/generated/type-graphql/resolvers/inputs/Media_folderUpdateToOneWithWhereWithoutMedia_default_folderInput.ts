import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderUpdateWithoutMedia_default_folderInput } from "../inputs/Media_folderUpdateWithoutMedia_default_folderInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderUpdateToOneWithWhereWithoutMedia_default_folderInput", {})
export class Media_folderUpdateToOneWithWhereWithoutMedia_default_folderInput {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpdateWithoutMedia_default_folderInput, {
    nullable: false
  })
  data!: Media_folderUpdateWithoutMedia_default_folderInput;
}
