import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutMedia_translationInput } from "../inputs/MediaCreateWithoutMedia_translationInput";
import { MediaUpdateWithoutMedia_translationInput } from "../inputs/MediaUpdateWithoutMedia_translationInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutMedia_translationInput", {})
export class MediaUpsertWithoutMedia_translationInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_translationInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutMedia_translationInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_translationInput, {
    nullable: false
  })
  create!: MediaCreateWithoutMedia_translationInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
