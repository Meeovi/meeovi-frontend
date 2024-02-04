import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutMedia_tagInput } from "../inputs/MediaCreateOrConnectWithoutMedia_tagInput";
import { MediaCreateWithoutMedia_tagInput } from "../inputs/MediaCreateWithoutMedia_tagInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutMedia_tagInput", {})
export class MediaCreateNestedOneWithoutMedia_tagInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_tagInput, {
    nullable: true
  })
  create?: MediaCreateWithoutMedia_tagInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutMedia_tagInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMedia_tagInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
