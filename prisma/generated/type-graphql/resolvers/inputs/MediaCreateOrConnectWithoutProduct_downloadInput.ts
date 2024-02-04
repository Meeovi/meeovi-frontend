import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_downloadInput } from "../inputs/MediaCreateWithoutProduct_downloadInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutProduct_downloadInput", {})
export class MediaCreateOrConnectWithoutProduct_downloadInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_downloadInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_downloadInput;
}
