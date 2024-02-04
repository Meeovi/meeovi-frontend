import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaScalarWhereInput } from "../inputs/MediaScalarWhereInput";
import { MediaUpdateManyMutationInput } from "../inputs/MediaUpdateManyMutationInput";

@TypeGraphQL.InputType("MediaUpdateManyWithWhereWithoutMedia_folderInput", {})
export class MediaUpdateManyWithWhereWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => MediaScalarWhereInput, {
    nullable: false
  })
  where!: MediaScalarWhereInput;

  @TypeGraphQL.Field(_type => MediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: MediaUpdateManyMutationInput;
}
