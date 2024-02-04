import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderScalarWhereInput } from "../inputs/Media_folderScalarWhereInput";
import { Media_folderUpdateManyMutationInput } from "../inputs/Media_folderUpdateManyMutationInput";

@TypeGraphQL.InputType("Media_folderUpdateManyWithWhereWithoutMedia_folderInput", {})
export class Media_folderUpdateManyWithWhereWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => Media_folderScalarWhereInput, {
    nullable: false
  })
  where!: Media_folderScalarWhereInput;

  @TypeGraphQL.Field(_type => Media_folderUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_folderUpdateManyMutationInput;
}
