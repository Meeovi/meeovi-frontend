import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_manufacturerInput } from "../inputs/MediaCreateWithoutProduct_manufacturerInput";
import { MediaUpdateWithoutProduct_manufacturerInput } from "../inputs/MediaUpdateWithoutProduct_manufacturerInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutProduct_manufacturerInput", {})
export class MediaUpsertWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutProduct_manufacturerInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_manufacturerInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
