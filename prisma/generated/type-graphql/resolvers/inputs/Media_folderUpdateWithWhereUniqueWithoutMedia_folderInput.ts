import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderUpdateWithoutMedia_folderInput } from "../inputs/Media_folderUpdateWithoutMedia_folderInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderUpdateWithWhereUniqueWithoutMedia_folderInput", {})
export class Media_folderUpdateWithWhereUniqueWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folderWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folderUpdateWithoutMedia_folderInput, {
    nullable: false
  })
  data!: Media_folderUpdateWithoutMedia_folderInput;
}
