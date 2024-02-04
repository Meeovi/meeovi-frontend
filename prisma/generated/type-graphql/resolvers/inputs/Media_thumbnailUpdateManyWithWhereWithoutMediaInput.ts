import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailScalarWhereInput } from "../inputs/Media_thumbnailScalarWhereInput";
import { Media_thumbnailUpdateManyMutationInput } from "../inputs/Media_thumbnailUpdateManyMutationInput";

@TypeGraphQL.InputType("Media_thumbnailUpdateManyWithWhereWithoutMediaInput", {})
export class Media_thumbnailUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_thumbnailScalarWhereInput, {
    nullable: false
  })
  where!: Media_thumbnailScalarWhereInput;

  @TypeGraphQL.Field(_type => Media_thumbnailUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_thumbnailUpdateManyMutationInput;
}
