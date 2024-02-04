import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_downloadInput } from "../inputs/MediaCreateWithoutProduct_downloadInput";
import { MediaUpdateWithoutProduct_downloadInput } from "../inputs/MediaUpdateWithoutProduct_downloadInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutProduct_downloadInput", {})
export class MediaUpsertWithoutProduct_downloadInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_downloadInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutProduct_downloadInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_downloadInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_downloadInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
