import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutMedia_tagInput } from "../inputs/MediaCreateWithoutMedia_tagInput";
import { MediaUpdateWithoutMedia_tagInput } from "../inputs/MediaUpdateWithoutMedia_tagInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutMedia_tagInput", {})
export class MediaUpsertWithoutMedia_tagInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_tagInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutMedia_tagInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_tagInput, {
    nullable: false
  })
  create!: MediaCreateWithoutMedia_tagInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
