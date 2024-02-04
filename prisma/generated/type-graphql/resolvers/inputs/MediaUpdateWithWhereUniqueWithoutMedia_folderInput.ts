import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutMedia_folderInput } from "../inputs/MediaUpdateWithoutMedia_folderInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateWithWhereUniqueWithoutMedia_folderInput", {})
export class MediaUpdateWithWhereUniqueWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_folderInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutMedia_folderInput;
}
