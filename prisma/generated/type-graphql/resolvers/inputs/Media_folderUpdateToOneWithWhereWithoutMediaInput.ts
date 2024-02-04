import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderUpdateWithoutMediaInput } from "../inputs/Media_folderUpdateWithoutMediaInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderUpdateToOneWithWhereWithoutMediaInput", {})
export class Media_folderUpdateToOneWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Media_folderUpdateWithoutMediaInput;
}
