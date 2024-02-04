import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutShipping_methodInput } from "../inputs/MediaCreateWithoutShipping_methodInput";
import { MediaUpdateWithoutShipping_methodInput } from "../inputs/MediaUpdateWithoutShipping_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutShipping_methodInput", {})
export class MediaUpsertWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
